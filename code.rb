# frozen_string_literal: true

require 'sinatra'

before do
  response.headers['Access-Control-Allow-Origin'] = '*'
end

get '/' do
  content_type :json
  { key1: 'value1', key2: 'value2' }.to_json
end
