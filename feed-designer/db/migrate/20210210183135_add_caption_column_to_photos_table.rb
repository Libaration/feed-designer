class AddCaptionColumnToPhotosTable < ActiveRecord::Migration[6.0]
  def change
    add_column :photos, :caption, :text
  end
end
