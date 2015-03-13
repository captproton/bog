require "ostruct"
class AmenitiesSetsController < ApplicationController
  def new
    @a       = AmenitiesSet.new
    
  end

  def edit
    @amenitie_set = AmenitiesSet.find(params[:id])
  end
  
  def create
    @amenitie_set = AmenitiesSet.new(amenities_set_params)
    @amenitie_set.image = @amenitie_set.key
    if @amenitie_set.save
      redirect_to photos_url, notice: "Amenities Set was successfully created."
    else
      render :new
    end
  end

  def amenities_set_params
    params.require(:photo).permit(:title, :image, :name, :image_name, :image_processed, :key, :name )
  end

end
