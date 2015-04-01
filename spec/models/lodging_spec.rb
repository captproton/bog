require_relative '../spec_helper_lite'
require_relative '../../app/models/lodging'
require 'ostruct'
describe Lodging do
  subject       { Lodging.new(->{entries}) }
  let(:entries) { [] }
  

  
  it 'has no entries' do
    subject.entries.must_be_empty
  end
  
  describe '#new_entry' do
    let(:new_space) { OpenStruct.new }
    
    before do
      subject.space_maker = ->{ new_space }
    end

    it 'returns a new space' do
      subject.new_space.must_equal new_space
    end

    it "sets the space's lodging reference to itself" do
      subject.new_space.lodging.must_equal(subject)
    end
    
    it 'accepts an attribute hash on behalf of the space maker' do
      space_maker = MiniTest::Mock.new
      space_maker.expect(:call, new_space, [{:x => 42, :y => 'z'}])
      subject.space_maker = space_maker
      subject.new_space(x: 42, y: 'z')
      space_maker.verify
    end
  end
  
  describe '#add_entry' do
    it 'adds an entry to lodging' do
      entry = stub!
      mock(entry).save!
      subject.add_entry(entry)
    end
  end
end
