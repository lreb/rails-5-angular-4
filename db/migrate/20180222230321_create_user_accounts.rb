class CreateUserAccounts < ActiveRecord::Migration[5.1]
  def change
    create_table :user_accounts do |t|
      t.string :email
      t.string :password_digest
      t.string :password_reminder_token
      t.timestamp :password_reminder_expire
      t.string :email_confirmation_token
      t.boolean :account_confirmed, :default => false
      t.boolean :account_active, :default => true

      t.timestamps
    end
  end
end
