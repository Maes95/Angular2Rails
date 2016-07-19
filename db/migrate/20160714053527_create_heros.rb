class CreateHeros < ActiveRecord::Migration
  def change
    create_table :heros do |t|
      t.string :name
      t.string :power

      t.timestamps null: false
    end
  end
end
