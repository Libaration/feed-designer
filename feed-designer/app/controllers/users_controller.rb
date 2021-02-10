class UsersController < ApplicationController
    def index
        users = User.all
        render json: users
    end
    def create
      user = User.find_or_initialize_by(userparams)
      user.scrape_photos
      if user.save
        render json: user
        else
        render json: "{status: incomplete}"
      end
    end

    def userparams
        params.require(:user).permit(:username)
    end
end
