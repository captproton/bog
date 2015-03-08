class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  
  before_action :init_lodging
  
  private
  
  def init_lodging
    @lodging = THE_LODGING
  end
end