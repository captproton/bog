class ManageListingController < ApplicationController
  include Wicked::Wizard
  steps :calendar, :pricing, :overview, :photos, :amenities, :listing, :location
  
  def show
    @space    = Space.find(params[:space_id])
    @photos   = @space.photos
    render_wizard
  end
  
  def update
    @space = Space.find(params[:space_id])
    @space.attributes = space_params
    render_wizard @space
  end
  
  # Use callbacks to share common setup or constraints between actions.
  # def set_district
  #   @district = District.find(params[:id])
  # end

  # Never trust parameters from the scary internet, only allow the white list through.
  def space_params
    params.require(:space).permit(:calendar_frequency, 
    :listing_weekly_price_native, 
    :title, :summary,
    :bedrooms, :beds,     :bathrooms, :bed_style, :home_style, :room_style, :person_capacity, 
    :directions,  
    :country_code, :street_address, :apt_ste_bld, :city, :state, :postal_code)
  end

end
