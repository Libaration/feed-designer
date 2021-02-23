class UsersController < ApplicationController
    def index
        users = User.all
        render json: UserSerializer.new(users).toSerializedJson
    end
    def show
        user = User.find(params[:id])
        render json: UserSerializer.new(user).toSerializedJson
    end
    def create
      user = User.find_or_initialize_by(userparams)
        if !User.exists?(user.id)
          user.save
          user.create_user_photos
          redirect_to user_path(user)
        elsif User.exists?(user.id)
          redirect_to user_path(user)
        else 
          render json: {Status: "Failure", Reason: "Account could not be loaded"}
        end
    end

    def userparams
        params.require(:user).permit(:username)
    end
end
