class UsersController < ApplicationController
    def create
      @user = User.new(userparams)
      @user.save
    end

    def userparams
        params.require(:user).permit(:username)
    end
end
