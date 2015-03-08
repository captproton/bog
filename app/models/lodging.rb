class Lodging
  
  attr_reader :entries
  attr_writer :space_maker
  
  def initialize(entry_fetcher=Space.method(:all))
    @entry_fetcher = entry_fetcher
  end
  
  def title
    "Watching Paint Dry"
  end
   
  def entries
    fetch_entries.sort_by{|e| e.pubdate}.reverse.take(10)
  end
 
  def new_space(*args)
    space_maker.call(*args).tap do |p|
      p.lodging = self
    end
  end
 
  def add_entry(entry)
    entry.save!
  end
 
  private
 
  def fetch_entries
    @entry_fetcher.()
  end

  def space_maker
    @space_maker ||= Space.method(:new)
  end
end