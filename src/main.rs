use ascii::AsciiString;
/// Example is derived from tiny-http example
/// https://github.com/tiny-http/tiny-http/blob/master/examples/hello-world.rs
#[cfg(target_os = "hermit")]
use hermit_sys as _;
use rust_embed::RustEmbed;
use std::path::Path;
use vfs::{EmbeddedFS, FileSystem};

#[derive(RustEmbed, Debug)]
#[folder = "html/"]
struct HttpdFilesystem;

fn get_content_type(filename: &str) -> &'static str {
	let path = Path::new(filename);
	let extension = match path.extension() {
		None => return "text/plain",
		Some(e) => e,
	};

	match extension.to_str().unwrap() {
		"gif" => "image/gif",
		"jpg" => "image/jpeg",
		"jpeg" => "image/jpeg",
		"png" => "image/png",
		"pdf" => "application/pdf",
		"ttf" => "font/ttf",
		"woff" => "font/woff",
		"woff2" => "font/woff2",
		"js" => "text/javascript",
		"csv" => "text/csv; charset=utf8",
		"css" => "text/css; charset=utf8",
		"htm" => "text/html; charset=utf8",
		"html" => "text/html; charset=utf8",
		"txt" => "text/plain; charset=utf8",
		_ => "text/plain; charset=utf8",
	}
}

fn main() {
	let fs: EmbeddedFS<HttpdFilesystem> = EmbeddedFS::new();
	let server = tiny_http::Server::http("0.0.0.0:9975").unwrap();
	println!("Now listening on port 9975");

	for request in server.incoming_requests() {
		let filename = if request.url().is_empty() || request.url() == "/" {
			"/index.html"
		} else {
			request.url()
		};

		let content_type = get_content_type(filename);

		match fs.open_file(filename) {
			Ok(mut file) => {
				let response = match content_type {
					"text/plain"
					| "text/plain; charset=utf8"
					| "text/html; charset=utf8"
					| "text/csv; charset=utf8"
					| "text/txt; charset=utf8" => {
						let mut text = String::new();
						file.read_to_string(&mut text).unwrap();

						tiny_http::Response::from_string(text)
					}
					_ => {
						let mut data: Vec<u8> = Vec::new();
						file.read_to_end(&mut data).unwrap();

						tiny_http::Response::from_data(data)
					}
				};

				let response = response.with_header(tiny_http::Header {
					field: "Content-Type".parse().unwrap(),
					value: AsciiString::from_ascii(content_type).unwrap(),
				});
				let _ = request.respond(response);
			}
			Err(_) => {
				println!("Unable to find {}", request.url());
				let response = tiny_http::Response::new_empty(tiny_http::StatusCode(404));
				let _ = request.respond(response);
			}
		}
	}
}
