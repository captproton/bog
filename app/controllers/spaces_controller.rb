class SpacesController < ApplicationController
  def new
    @space = @lodging.new_space
  end

  def create
    @space = @lodging.new_space(space_params)
    # @space = Space.new(space_params)
    if @space.publish
      redirect_to space_manage_listing_path(@space.id, "calendar"), notice: "space initiated"
    else
      render :new
    end
  end
  
  # Use callbacks to share common setup or constraints between actions.
  # def set_district
  #   @district = District.find(params[:id])
  # end

  # Never trust parameters from the scary internet, only allow the white list through.
  def space_params
    params.require(:space).permit(:title, :summary, :calendar_frequency, :home_style, :room_style, 
    :person_capacity)
  end
  
end
