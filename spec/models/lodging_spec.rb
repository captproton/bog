require_relative '../spec_helper_lite'
require_relative '../../app/models/lodging'
require 'ostruct'
describe Lodging do
  before do
    @entries  = []
    @it       = Lodging.new(->{@entries})
  end
  let(:entries) { [] }
  subject { Lodging.new(->{entries}) }
  
  it 'should have no entries' do
    @it.entries.must_be_empty
  end
  
  describe '#new_entry' do
    before do
      @new_space = OpenStruct.new
      @it.space_maker = ->{ @new_space }
    end


    it 'should return a new space' do
      @it.new_space.must_equal @new_space
    end
    
    it 'should set the space lodging reference to itself' do
      @it.new_space.lodging.must_equal(@it)
    end
    
    it 'should accept an attribute hash on behalf of the space maker' do
      space_maker = MiniTest::Mock.new
      space_maker.expect(:call, @new_space, [{:x => 42, :y => 'z'}])
      @it.space_maker = space_maker
      @it.new_space(x: 42, y: 'z')
      space_maker.verify
    end
  end
  
  describe '#add_entry' do
    it 'should add an entry to lodging' do
      entry = stub!
      mock(entry).save!
      @it.add_entry(entry)
    end
  end
end
