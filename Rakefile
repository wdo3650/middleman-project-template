# http://scottwb.com/blog/2012/02/24/middleman-deployment-rakefile/

desc "Build the website from source"
task :build, [:site] do |t, args|
  if args.site
	puts "## Building #{args.site}"
  else
  	puts "## Build website"
  end
  system("grunt build")
  if args.site
	status = system("bundle exec middleman build -g #{args.site}/* --clean")
  else
  	status = system("bundle exec middleman build --clean")
  end
  puts status ? "OK" : "FAILED"
end

desc "Run the preview server at http://localhost:4567"
task :preview do
  system("bundle exec middleman server")
end
