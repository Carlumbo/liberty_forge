require 'test_helper'

class HomepagesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @homepage = homepages(:one)
  end

  test "should get index" do
    get homepages_url, as: :json
    assert_response :success
  end

  test "should create homepage" do
    assert_difference('Homepage.count') do
      post homepages_url, params: { homepage: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show homepage" do
    get homepage_url(@homepage), as: :json
    assert_response :success
  end

  test "should update homepage" do
    patch homepage_url(@homepage), params: { homepage: {  } }, as: :json
    assert_response 200
  end

  test "should destroy homepage" do
    assert_difference('Homepage.count', -1) do
      delete homepage_url(@homepage), as: :json
    end

    assert_response 204
  end
end
