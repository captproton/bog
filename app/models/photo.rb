class Photo < ActiveRecord::Base
  belongs_to :location
  belongs_to :space
  #validations
  # validates :space, presence: true
  mount_uploader :image, ImageUploader

  before_create :default_name

  def default_name
    self.title ||= File.basename(image.filename, '.*').titleize if image
  end

  # after_save :enqueue_image
  
  def image_name
    File.basename(image.path || image.filename) if image
  end

  def rank_by_desirability
    order("desirability")
  end
  
  def enqueue_image
    ImageWorker.perform_async(id, key) if key.present?
  end

  class ImageWorker
    include Sidekiq::Worker
    
    def perform(id, key)
      photo = Photo.find(id)
      photo.key = key
      photo.remote_image_url = photo.image.direct_fog_url(with_path: true)
      photo.save!
      photo.update_column(:image_processed, true)
    end
  end
  
  
end
