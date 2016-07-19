class Hero < ActiveRecord::Base
  validates :name, :power, presence: true
end
