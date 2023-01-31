class CreateGames < ActiveRecord::Migration[7.0]
  def change
    create_table :games do |t|
      t.date :date
      t.string :result
      t.string :score
      t.string :opponent
      t.string :location
      t.string :st_pitcher
      t.string :note
      t.timestamps
    end
  end
end
