package informatika.controller;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.zip.DataFormatException;
import java.util.zip.Deflater;
import java.util.zip.Inflater;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import informatika.model.Image;
import informatika.repository.ImageRepository;

@RestController
@RequestMapping(path = "image")
public class ImageController {
	
  @Autowired
    ImageRepository imageRepository;
  
  String replaseExtenstions(String input) {
	  System.out.println(input);
	  String[] splitted = input.split("\\.");
	  for( String s : splitted)
	  System.out.println(s);
	  String res =splitted[0] + ".jpeg";
	  return res;
  }
    @PostMapping("/upload")
    public void uplaodImage(@RequestParam("imageFile") MultipartFile file) throws IOException {
        System.out.println("Original Image Byte Size - " + file.getBytes().length);
        Image img = new Image(replaseExtenstions(file.getOriginalFilename()), file.getContentType(),
                compressBytes(file.getBytes()));
        imageRepository.save(img);
//        return ResponseEntity.status(HttpStatus.OK);
    }
    @GetMapping(path = "/get/{imageName}" ,  headers="Accept=*/*", produces = "application/json; charset=UTF-8")
    public Image getImage(@PathVariable("imageName") String imageName) throws IOException {
        final Image retrievedImage = imageRepository.getByName(imageName+".jpeg").orElse(null);
        if(retrievedImage == null) {
        	System.out.print("Nema slike " + imageName);
        	return null;
        }
        Image img = new Image(retrievedImage.getName(), retrievedImage.getType(),
                decompressBytes(retrievedImage.getPicByte()));
        System.out.print(img);
        return img;
    }
    
    
    // compress the image bytes before storing it in the database
    public static byte[] compressBytes(byte[] data) {
        Deflater deflater = new Deflater();
        deflater.setInput(data);
        deflater.finish();
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
        byte[] buffer = new byte[1024];
        while (!deflater.finished()) {
            int count = deflater.deflate(buffer);
            outputStream.write(buffer, 0, count);
        }
        try {
            outputStream.close();
        } catch (IOException e) {
        }
        System.out.println("Compressed Image Byte Size - " + outputStream.toByteArray().length);
        return outputStream.toByteArray();
    }
    // uncompress the image bytes before returning it to the angular application
    public static byte[] decompressBytes(byte[] data) {
        Inflater inflater = new Inflater();
        inflater.setInput(data);
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
        byte[] buffer = new byte[1024];
        try {
            while (!inflater.finished()) {
                int count = inflater.inflate(buffer);
                outputStream.write(buffer, 0, count);
            }
            outputStream.close();
        } catch (IOException ioe) {
        } catch (DataFormatException e) {
        }
        return outputStream.toByteArray();
    }
}
