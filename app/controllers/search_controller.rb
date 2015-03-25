class SearchController < ApplicationController
  def index
    @search = @lodging.entries
  end
end
