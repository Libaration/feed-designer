require "HTTParty"
require "nokogiri"
class User < ApplicationRecord
    has_many :photos, dependent: :destroy
    before_save :scrape_avatar, :scrape_name

    def scrape_avatar
        self.image = load_site.css(".profile-avatar img").attr('src').text
    end
    def scrape_name
        self.name = load_site.css("h2").text
    end
    def scrape_photos
        photosHash = {photos: []}
        images = load_site.xpath('//div[@class="content box-photos-wrapper"]').css("li").css("img")
        images.each_with_index do |img, i|
            url = img.attr('src')
            caption = img.attr('alt')
            photo = {
                id: i,
                url: url,
                caption: caption
            }
            photosHash[:photos].push(photo)
        end
        photosHash
    end

    def create_user_photos
        photos = scrape_photos[:photos].reverse
        photos.each do |img|
            if Photo.exists?(['url LIKE ?', img[:url]])
                next
            end
            self.photos.create(caption: img[:caption], url: img[:url])
        end
    end

    private
    def load_site
        site = HTTParty.get("https://www.picuki.com/profile/#{self.username}")
        response = Nokogiri::HTML(site)
    end
end
