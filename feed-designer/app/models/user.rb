require "HTTParty"
require "nokogiri"
class User < ApplicationRecord
    before_save :scrape_avatar

    def scrape_avatar
        site = HTTParty.get("https://www.picuki.com/profile/#{self.username}")
        response = Nokogiri::HTML(site)
        binding.pry
    end
end
