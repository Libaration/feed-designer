class PhotosController < ApplicationController
    def create
      @photo = Photo.new(post_params)
      if @photo.save
        render json: @photo
      else
        render json: '{failure}'
      end
    end

    private
    def post_params
        params.require(:photo).permit(:url, :user_id, :caption)
    end
end
