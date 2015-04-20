# http://scottwb.com/blog/2012/02/24/middleman-deployment-rakefile/

desc "Build the website from source"
task :build do
  puts "## Building website"
  system("grunt build")
  status = system("bundle exec middleman build --clean")
  puts status ? "OK" : "FAILED"
end

desc "Run the preview server at http://localhost:4567"
task :preview do
  system("bundle exec middleman server")
end
