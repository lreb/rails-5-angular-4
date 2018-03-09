class ChangeAccountUserToAccount < ActiveRecord::Migration[5.1]
  def self.up
    rename_table :user_accounts, :accounts
  end

  def self.down
    rename_table :accounts, :user_accounts
  end
end
