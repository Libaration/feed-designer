class CreatePhotos < ActiveRecord::Migration[6.0]
  def change
    create_table :photos do |t|
      t.text :url
      t.integer :user_id
      t.timestamps
    end
  end
end
