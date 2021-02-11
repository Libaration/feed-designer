class PhotosController < ApplicationController
    def create
      @photo = Photo.find_or_initialize_by(post_params)
      if @photo.save
        render json: @photo
      else
        render json: '{failure}'
      end
    end

    private
    def post_params
        params.require(:photo).permit(:url, :user_id)
    end
end
