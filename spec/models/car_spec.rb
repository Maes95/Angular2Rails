require 'rails_helper'

RSpec.describe Car, type: :model do
  before do
    @car = FactoryGirl.create(:car)
  end

  describe "when make is absent" do
    it "is not valid" do
      @car.make = ""
      expect(@car).not_to be_valid
    end
  end

  describe "when model is absent" do
    it "is not valid" do
      @car.model = ""
      expect(@car).not_to be_valid
    end
  end

  describe "when year is absent" do
    it "is not valid" do
      @car.year = ""
      expect(@car).not_to be_valid
    end
  end

  describe "when car already exists" do
    it "is not valid" do
      identical_car = @car.dup
      expect(identical_car).not_to be_valid
    end
  end
end
