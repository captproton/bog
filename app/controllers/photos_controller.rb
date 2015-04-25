class PhotosController < ApplicationController
  before_action :set_photo, only: [:show, :edit, :update, :destroy]
  def index
    @photos = Photo.all
  end

  def show
  end

  def new
    @photo = Photo.new
  end

  def create
    @photo = Photo.create(photo_params)
  end

  def edit
  end

  def update
    respond_to do |format|
      if @photo.update(photo_params)
        format.html { redirect_to @photo, notice: 'Photo was successfully updated.' }
        format.json { render :show, status: :ok, location: @photo }
      else
        format.html { render :edit }
        format.json { render json: @photo.errors, status: :unprocessable_entity }
      end
    end
  end
    

  def destroy
    @photo.destroy
    redirect_to photos_url, notice: "Photo was successfully destroyed."
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_photo
      @photo = Photo.find(params[:id])
    end


  def photo_params
    params.require(:photo).permit(:title, :image, :name, :image_name, :image_processed, :key, :name, :space_id )
  end

end
