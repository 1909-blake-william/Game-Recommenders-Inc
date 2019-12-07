package utility;

import java.io.IOException;
import java.io.InputStream;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;

/*
 * Utility to reduce number of object mappers
 * 
 * write:	converts pojo to json, used to convert:
 * 			-game data sent to angular
 * 
 * read:	converts json to pojo, used to convert:
 * 			login credentials sent to java
 * 			liked/disliked game info sent to java
 * 			
 * 
 */

public class JsonReader {

	public static final String CONTENT_TYPE = "application/json";
	private static final ObjectMapper mapper = new ObjectMapper();
	private static Logger logger = LogManager.getLogger(JsonReader.class);

	static {
		mapper.enable(SerializationFeature.INDENT_OUTPUT);
	}

	private JsonReader() {
	}

	public static byte[] write(Object o) {
		try {
			return mapper.writeValueAsBytes(o);
		} catch (IOException e) {
			logJsonMarshalException(e, o.getClass());
			return null;
		}
	}

	public static Object read(InputStream is, Class<?> classy) {
		try {
			return mapper.readValue(is, classy);
		} catch (IOException e) {
			logJsonUnmarshalException(e, classy);
			return null;
		}
	}

	// Memo: Marshalling = POJO=>JSON (write)
	public static void logJsonMarshalException(IOException e, Class<?> inputClass) {
		logger.warn("Failed to Marshal object of type {}", inputClass.getName());
		logger.warn("Stack Trace: ", e);
	}

	// Memo: Unmarshalling JSON=>POJO (a read)
	public static void logJsonUnmarshalException(IOException e, Class<?> inputClass) {
		logger.warn("Failed to Unmarshal object of type {}", inputClass.getName());
		logger.warn("Stack Trace: ", e);
	}
}