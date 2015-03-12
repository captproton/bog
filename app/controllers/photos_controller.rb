class PhotosController < ApplicationController
  def index
    @photos = Photo.all
    @uploader = Photo.new.image
    @uploader.success_action_redirect = new_photo_url
  end

  def show
    @photo = Photo.find(params[:id])
  end

  def new
    @photo = Photo.new(key: params[:key])
    
  end

  def create
    @photo = Photo.new(photo_params)
    @photo.image = @photo.key
    if @photo.save
      redirect_to photos_url, notice: "Photo was successfully created."
    else
      render :new
    end
  end

  def edit
    @photo = Photo.find(params[:id])
  end

  def update
    @photo = Photo.find(params[:id])
    if @photo.update_attributes(params[:photo])
      redirect_to photos_url, notice: "Photo was successfully updated."
    else
      render :edit
    end
  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy
    redirect_to photos_url, notice: "Photo was successfully destroyed."
  end

  def photo_params
    params.require(:photo).permit(:title, :image, :name, :image_name, :image_processed, :key, :name )
  end

end
