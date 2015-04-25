require 'date'
require 'active_record'
 
class Space < ActiveRecord::Base
  validates :home_style,      :presence => true #, :if => :active_or_title?
  validates :room_style,      :presence => true #, :if => :active_or_title?
  has_many :photos
  has_many :photos, :inverse_of => :space, :dependent => :destroy
  # enable nested attributes for photos through space class
  accepts_nested_attributes_for :photos, allow_destroy: true
  has_one :amenity_group
  accepts_nested_attributes_for :amenity_group
  geocoded_by :address
  after_validation :geocode, if: :street_address_changed?
  
  attr_accessor :lodging

  # mount_uploaders :images, ImageUploader
  
  def publish(clock=DateTime)
    return false unless valid?
    self.pubdate = clock.now
    @lodging.add_entry(self)
  end

  def active?
    status == 'active'
  end

  def self.place_array_from_params(place_params)
    place_array = place_params.to_s.split(", ")
  end

  def self.city_state_array(place_params)
    pa = self.place_array_from_params(place_params)
    city_name = pa[0]
    state_name = pa[-2]
    city_state = Array.new
    city_state = [city_name, state_name]
  end
  
  def self.city_state_string(place_params)
    csa = self.city_state_array(place_params)
    csa << "United States"
    city_state = csa.join(", ")
  end
  
  def self.search(search)
    if search
      csa = self.city_state_array(search)
      Space.where('city LIKE ?', "%#{csa[0]}%").where('state LIKE ?', "%#{csa[1]}%")
    else
      Space.all
    end
  end
  
  def address
    "#{street_address}, #{city}, #{state}"
  end
  # def active_or_title?
  #   status.include?('title') || active?
  # end

end
