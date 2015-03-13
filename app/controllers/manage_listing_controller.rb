class ManageListingController < ApplicationController
  include Wicked::Wizard
  steps :calendar, :pricing, :overview, :photos, :amenities, :listing, :location
  
  def show
    @space    = Space.find(params[:space_id])
    @photos   = @space.photos
    
    ## Listing page is divided into two sections options. The OpenStruct feeds options.
    # Rooms and Beds
    rooms_n_beds = {bedrooms: [*1..10], 
                    beds: [*1..15], 
                    bed_style: ["airbed","futon","pull_out_sofa","couch","real_bed"],
                    bathrooms: [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5]
                  }

    # Listing Info
    # home_style is huge, so we break it down
    home_style_keys         = [*1..25]
    home_style_description  = ["Apartment", "House", "Bed &amp; Breakfast", "Condo", "Loft", "Cabin", "Villa", "Castle",
                              "Dorm", "Treehouse", "Boat", "Plane", "Camper/RV", "Igloo", "Lighthouse", "Yurt", "Tipi",
                              "Cave", "Island", "Chalet", "Earth House", "Hut", "Train", "Tent", "Other"
                            ]
    home_style              = Hash[*keys.zip(home_styles).flatten]
    
    # roome_style and person capacity are simple
    room_style  =  {"entire_home" => "Entire home/apt", "private_room" => "Private room", "shared_room" => "Shared room"}
    person_capacity   = [*1..16]
    listing_info      = {home_style: home_style, room_style: room_style, person_capacity: person_capacity}
    
    listing_params = {rooms_n_beds: rooms_n_beds, listing_info: listing_info}
    # OpenStruct for easy access
    @listing = OpenStruct.new(listing_params)
    
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
