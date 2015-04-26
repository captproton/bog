class RoomsController < ApplicationController
  def index
    @rooms = @lodging.entries
  end
  
  def show
    @room       = Space.find(params[:id])
    @photos     = @room.photos
    @amenities  = @room.amenity_group.attributes.except("created_at", "updated_at", "space_id", "id",  "pets_live_on_property", "dog", "cat", "other_pet")

    @hero_image_url = "" << @photos.first.image_url.to_s if @photos.first
    # @hero_image = @photos.first
  end
end
