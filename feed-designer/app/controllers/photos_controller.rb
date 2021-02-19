class PhotosController < ApplicationController
    def create
      @photo = Photo.new(post_params)
      if @photo.save
        render json: @photo
      else
        render json: {Status: "Failure"}
      end
    end
    def destroy
      @photo = Photo.find(params[:id])
      if @photo.destroy
        render json: {Status: "Success"}
      else
        render json: {Status: "Failure"}
      end
    end

    private
    def post_params
        params.require(:photo).permit(:url, :user_id, :caption)
    end
end
