require_relative '../spec_helper_full'
require_relative '../../app/models/space'

describe Space do
  # include SpecHelpers

  before do
    # setup_nulldb
    @it = Space.new(:title => "TITLE", :room_style => "private_room", :home_style => "bed_and_breakfast")
    @ar = @it
    @ar_class = Space
  end
 
  after do
    # teardown_nulldb
  end

  it "should support reading and writing a lodging reference" do
    lodging = Object.new
    @it.lodging = lodging
    @it.lodging.must_equal lodging
  end
  
  describe '#publish' do
    before do
      @lodging = stub!
      @it.lodging = @lodging
      stub(@ar).valid?{true}
    end
    it 'should add the space to the lodging' do
      mock(@lodging).add_entry(@it)
      @it.publish
    end
    it 'should return truthy on success' do
      assert(@it.publish)
    end
    
    describe 'given an invalid space' do
      before do
        # stub(@ar).valid?{false}
        # Each space requires a title, but not a summary
        @it = Space.new(summary: "lorem ipsum")
      end

      it "should return false" do
        refute(@it.publish)
      end
      
    end
  end
  
  describe "#pubdate" do
    describe "before publishing" do
      it "should be blank" do
        @it.pubdate.must_be_nil
      end
    end
 
    describe "after publishing" do
      before do
        @clock = stub!
        @now = DateTime.parse("2011-09-11T02:56")
        stub(@clock).now(){@now}
        @it.lodging = stub!
        @it.publish(@clock)
      end
 
      it "should be a datetime" do
        assert(@it.pubdate.is_a?(DateTime) || 
               @it.pubdate.is_a?(ActiveSupport::TimeWithZone),
               "pubdate must be a datetime of some kind")
      end
 
      it "should be the current time" do
        @it.pubdate.must_equal(@now)
      end
 
    end
  end
  
end
