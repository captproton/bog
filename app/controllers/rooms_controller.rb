class RoomsController < ApplicationController
  def index
    @rooms = @lodging.entries
  end
  
  def show
    @room = Space.find(params[:id])
  end
end
