class UserStepsController < ApplicationController
  include Wicked::Wizard
  steps :personal, :social
  
  def show
    render_wizard
  end
end
