require "HTTParty"
require "nokogiri"
class User < ApplicationRecord
    has_many :photos
    before_save :scrape_avatar, :scrape_name

    def scrape_avatar
        self.image = load_site.css(".profile-avatar img").attr('src').text
    end
    def scrape_name
        self.name = load_site.css("h2").text
    end
    def scrape_photos
        # if !self.photos.empty?
        #     self.photos.destroy_all
        #     self.scrape_photos
            # image1 = load_site.xpath('//div[@class="content box-photos-wrapper"]').css("li").css("img")[1]
            #     url = image1.attr('src')
            #     caption = image1.attr('alt')
            #     self.photos.create(caption: caption, url: url)
        # else
            images = load_site.xpath('//div[@class="content box-photos-wrapper"]').css("li").css("img")
            images.each do |img|
                if Photo.exists?(['url LIKE ?', "#{img.attr('src')}"])
                    next
                end
                    url = img.attr('src')
                    caption = img.attr('alt')
                    self.photos.create(caption: caption, url: url)
                end
        # end
    end

    private
    def load_site
        site = HTTParty.get("https://www.picuki.com/profile/#{self.username}")
        response = Nokogiri::HTML(site)
    end
end
