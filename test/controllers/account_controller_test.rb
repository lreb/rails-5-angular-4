require 'test_helper'

class AccountControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get account_create_url
    assert_response :success
  end

end
