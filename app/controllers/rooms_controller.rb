class RoomsController < ApplicationController
  def index
    @rooms = Space.all
  end
end
