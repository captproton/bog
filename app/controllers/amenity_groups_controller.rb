class AmenityGroupsController < ApplicationController
  def new
    @amenity_group      = AmenityGroup.new

    most_common         = {essentials: "Towels, bed sheets, soap, and toilet paper",tv: "",cable_tv: "",air_condition: "",heating: "Central heating or a heater in the listing",kitchen: "pace where guests can cook their own meals",internet: "Internet (wired or wireless)",wireless_internet: "Continuous access in the listing"}
    extras              = {hot_tub: "",washer: "In the building, free or for a fee", pool: "Private or shared.", dryer: "In the building, free or for a fee", breakfast: "Breakfast is provided.", free_parking_on_premisis: "", gym: "Free, in the building, or nearby", elevator_in_building: "", indoor_fireplace: "", buzzer_wireless_intercom:"", doorman: "", shampoo: ""}
    special_features    = {family_kid_friendly: "",smoking_allowed: "", suitable_for_events: "", pets_allowed: "", wheelchair_accessible: ""}
    home_safety    = {smoke_detector: "", carbon_monoxide_detector: "", first_aid_kit: "", safety_card: "", fire_extinguisher: ""}

    params              = {most_common: most_common, extras: extras, special_features: special_features, home_safety: home_safety}

    @aid = OpenStruct.new(params)
  end

  def edit
    @amenity_group      = AmenityGroup.find(params[:id])

    most_common         = {essentials: "Towels, bed sheets, soap, and toilet paper",tv: "",cable_tv: "",air_condition: "",heating: "Central heating or a heater in the listing",kitchen: "pace where guests can cook their own meals",internet: "Internet (wired or wireless)",wireless_internet: "Continuous access in the listing"}
    extras              = {hot_tub: "",washer: "", pool: "", dryer: "", breakfast: "", free_parking_on_premisis: "", gym: "", elevator_in_building: "", indoor_fireplace: "", buzzer_wireless_intercom:"", doorman: "", shampoo: ""}
    special_features    = {family_kid_friendly: "",smoking_allowed: "", suitable_for_events: "", pets_allowed: "", wheelchair_accessible: ""}
    home_safety    = {smoke_detector: "", carbon_monoxide_detector: "", first_aid_kit: "", safety_card: "", fire_extinguisher: ""}

    params              = {most_common: most_common, extras: extras, special_features: special_features, home_safety: home_safety}

    @aid = OpenStruct.new(params)
  end
  
  def create
    @amenity_group = AmenityGroup.new(amenity_group_params)
    if @amenity_group.save
      redirect_to  edit_amenity_group_path(@amenity_group), notice: "AmenityGroup was successfully created."
    else
      render :new
    end
  end
  
  def update
    @amenity_group = AmenityGroup.find(params[:id])
    if @amenity_group.update_attributes(amenity_group_params)
      redirect_to edit_amenity_group_path(@amenity_group), notice: "Amenities were successfully updated."
    else
      render :edit
    end
  end

  def amenity_group_params
    params.require(:amenity_group).permit(:essentials, :tv, :cable_tv, :air_condition, :heating, :kitchen, :internet, :wireless_internet, :hot_tub, :washer, :pool, :dryer, :breakfast, :free_parking_on_premisis, :gym, :elevator_in_building, :indoor_fireplace, :buzzer_wireless_intercom, :doorman, :shampoo, :smoke_detector, :carbon_monoxide_detector, :first_aid_kit, :safety_card, :fire_extinguisher, :family_kid_friendly, :smoking_allowed, :suitable_for_events, :pets_allowed, :wheelchair_accessible)
  end
  
end
