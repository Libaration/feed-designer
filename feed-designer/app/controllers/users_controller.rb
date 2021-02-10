class UsersController < ApplicationController
    def create
      @user = User.new(userparams)
      binding.pry
    end

    def userparams
        params.require(:user).permit(:username)
    end
end
