class ManageListingController < ApplicationController
  include Wicked::Wizard
  steps :calendar, :pricing, :overview, :photos, :amenities, :listing, :location
  
  def show
    @space    = Space.find(params[:space_id])
    ## Calendar
    #  nothing special needed
    ## Pricing
    
    ## Overview
    
    ## Photos
    @photos   = @space.photos
    @uploader = Photo.new.image
    @uploader.success_action_redirect = new_photo_url
    
    ## Amenities
    @amenity_group      = AmenityGroup.find_or_create_by(space_id: params[:space_id])

    most_common         = {essentials: "Towels, bed sheets, soap, and toilet paper",tv: "",cable_tv: "",
      air_condition: "",heating: "Central heating or a heater in the listing",
      kitchen: "Place where guests can cook their own meals", internet: "Internet (wired or wireless)",
      wireless_internet: "Continuous access in the listing"}
    extras              = {hot_tub: "", washer: "In the building, free or for a fee", pool: "Private or shared.", 
      dryer: "In the building, free or for a fee", breakfast: "Breakfast is provided.", 
      free_parking_on_premisis: "", gym: "Free, in the building, or nearby", elevator_in_building: "", 
      indoor_fireplace: "", buzzer_wireless_intercom:"", doorman: "", shampoo: ""}
    special_features    = {family_kid_friendly: "The property is suitable for hosting families with children",
      smoking_allowed: "", suitable_for_events: "The listing can accommodate a gathering of 25 or more attendees", 
      pets_allowed: "", wheelchair_accessible: 'Please do not select this option unless you are certain you meet the the ADA standards'}
    home_safety    = {smoke_detector: "", carbon_monoxide_detector: "There is a functioning smoke detector in the listing", first_aid_kit: "", safety_card: "Posted emergency information and resources", fire_extinguisher: ""}

    params              = {most_common: most_common, extras: extras, special_features: special_features, home_safety: home_safety}

    @aid = OpenStruct.new(params)
    

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
    home_style_description  = ["Apartment", "House", "Bed and Breakfast", "Condo", "Loft", "Cabin", "Villa", "Castle",
                              "Dorm", "Treehouse", "Boat", "Plane", "Camper/RV", "Igloo", "Lighthouse", "Yurt", "Tipi",
                              "Cave", "Island", "Chalet", "Earth House", "Hut", "Train", "Tent", "Other"
                            ]
    home_styles              = Hash[*home_style_description.zip(home_style_keys).flatten]
    
    # roome_style and person capacity are simple
    room_styles  =  {"Entire home/apt" => "entire_home", "Private room" =>"private_room", "Shared room" => "shared_room"}
    guest_capacity   = [*1..15]
    listing_info      = {home_styles: home_styles, room_styles: room_styles, guest_capacity: guest_capacity}
    
    listing_params = {rooms_n_beds: rooms_n_beds, listing_info: listing_info}
    # OpenStruct for easy access
    @listing = OpenStruct.new(listing_params)
    
    ## Location
    
    render_wizard
  end
  
  def update
    @space = Space.find(params[:space_id])
    @space.attributes = space_params
    render_wizard @space
  end
  
  def calendar_params
    params = [:calendar_frequency]
  end
  
  def pricing_params
    params = [:listing_weekly_price_native]
  end
  
  def overview_params
    params = [:title, :summary]
  end
  
  def photos_params
    params = [:photos_goes_here]
  end
  
  def listing_params
    params = [:listing_goes_here]
  end
  
  def location_params
    params = [:directions, :country_code, :street_address, :apt_ste_bld, :city, :state, :postal_code]
  end
  
  def amenity_group_params
    params = [:essentials, :tv, :cable_tv, :air_condition, :heating, :kitchen, :internet, :wireless_internet, :hot_tub, :washer, :pool, :dryer, :breakfast, :free_parking_on_premisis, :gym, :elevator_in_building, :indoor_fireplace, :buzzer_wireless_intercom, :doorman, :shampoo, :family_kid_friendly, :smoking_allowed, :suitable_for_events, :pets_allowed, :wheelchair_accessible, :smoke_detector, :carbon_monoxide_detector, :first_aid_kit, :safety_card, :fire_extinguisher]
  end

  def allowed_params
    # ap = calendar_params << pricing_params << overview_params << photos_params << listing_params << location_params << amenity_group_params
    ap =  [:space, :essentials, :tv, :cable_tv, :air_condition, :heating, :kitchen, :internet, :wireless_internet, :hot_tub, :washer, :pool, :dryer, :breakfast, :free_parking_on_premisis, :gym, :elevator_in_building, :indoor_fireplace, :buzzer_wireless_intercom, :doorman, :shampoo, :family_kid_friendly, :smoking_allowed, :suitable_for_events, :pets_allowed, :wheelchair_accessible, :smoke_detector, :carbon_monoxide_detector, :first_aid_kit, :safety_card, :fire_extinguisher]
    # ap = ap.flatten
  end
  # Never trust parameters from the scary internet, only allow the white list through.
  def space_params
    params.require(:space).permit(:calendar_frequency, 
      :listing_weekly_price_native, 
      :title, :summary,
      :bedrooms, :beds, :bed_style, :bathrooms, :home_style, :room_style, :person_capacity,
      :directions, :country_code, :street_address, :apt_ste_bld, :city, :state, :postal_code,
      :amenity_group_attributes => amenity_group_params )
  end

end
