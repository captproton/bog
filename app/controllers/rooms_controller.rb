class RoomsController < ApplicationController
  def index
    @rooms = @lodging.entries
  end
  
  def show
    @room       = Space.find(params[:id])
    @photos     = @room.photos
    
    @hero_image = @photos.first    
  end
end
