require 'sinatra'

get '/ruby-microservice-message' do
  { message: 'Hello from the Ruby Microservice!' }.to_json
end
