class AmenityGroupsController < ApplicationController
  def new
    @amenity_group      = AmenityGroup.new
    # most_common         = ["essentials", "tv", "cable_tv", "air_condition", "heating", "kitchen", "internet", "wireless_internet"]
    most_common         = {essentials: "Towels, bed sheets, soap, and toilet paper",tv: "",cable_tv: "",air_condition: "",heating: "Central heating or a heater in the listing",kitchen: "pace where guests can cook their own meals",internet: "Internet (wired or wireless)",wireless_internet: "Continuous access in the listing"}
    extras              = {hot_tub: "",washer: "", pool: "", dryer: "", breakfast: "", free_parking_on_premisis: "", gym: "", elevator_in_building: "", indoor_fireplace: "", buzzer_wireless_intercom:"", doorman: "", shampoo: ""}
    special_features    = {family_kid_friendly: "",smoking_allowed: "", suitable_for_events: "", pets_allowed: "", wheelchair_accessible: ""}
    home_safety    = {smoke_detector: "", carbon_monoxide_detector: "", first_aid_kit: "", safety_card: "", fire_extinguisher: ""}

    params              = {most_common: most_common, extras: extras, special_features: special_features, home_safety: home_safety}

    @aid = OpenStruct.new(params)
  end

  def edit
  end
  
  def create
    @amenity_group = AmenityGroup.new(amenity_group_params)
    if @amenity_group.save
      redirect_to  edit_amenity_group_path(@amenity_group), notice: "AmenityGroup was successfully created."
    else
      render :new
    end
  end
  
  def amenity_group_params
    params.require(:amenity_group).permit(:essentials, :tv, :cable_tv, :air_condition, :heating, :kitchen, :internet, :wireless_internet )
  end
  
end
