require "HTTParty"
require "nokogiri"
class User < ApplicationRecord
    before_save :scrape_avatar, :scrape_name

    def scrape_avatar
        site = HTTParty.get("https://www.picuki.com/profile/#{self.username}")
        response = Nokogiri::HTML(site)
        self.image = response.css(".profile-avatar img").attr('src').text
    end
    def scrape_name
        site = HTTParty.get("https://www.picuki.com/profile/#{self.username}")
        response = Nokogiri::HTML(site)
        self.name = response.css("h2").text
    end
end
