import requests
    result=requests.get("http://coderbyte.com/api/challenges/json/age-counting")
    resp_data=result.json()["data"].split(",")
print(resp_data)
    count=0
for data in resp_data:
    split_data=data.split("=")
if split_data[0].strip()=="age" and int(split_data[1])>=50:
    count+=1
print(count)

//write in javascript
var result = httpGet("http://coderbyte.com/api/challenges/json/age-counting");
var resp_data = result.data.split(",");
var count = 0;
for (var i = 0; i < resp_data.length; i++) {
    var split_data = resp_data[i].split("=");
    if (split_data[0].trim() == "age" && parseInt(split_data[1]) >= 50) {
        count++;
    }
}
console.log(count);

//write in php
$result = file_get_contents("http://coderbyte.com/api/challenges/json/age-counting");
$resp_data = explode(",", $result->data);
$count = 0;
foreach ($resp_data as $data) {
    $split_data = explode("=", $data);
    if ($split_data[0] == "age" && intval($split_data[1]) >= 50) {
        $count++;
    }
}
echo $count;

//write in ruby
require 'net/http'
require 'json'
result = Net::HTTP.get(URI('http://coderbyte.com/api/challenges/json/age-counting'))
resp_data = JSON.parse(result)["data"].split(",")
count = 0
resp_data.each do |data|
    split_data = data.split("=")
    if split_data[0] == "age" && split_data[1].to_i >= 50
        count += 1
    end
end
puts count

//write in java
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
public class Main {
    public static void main(String[] args) {
        try {
            URL url = new URL("http://coderbyte.com/api/challenges/json/age-counting");
            URLConnection urlConnection = url.openConnection();
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(urlConnection.getInputStream()));
            String inputLine;
            String result = "";
            while ((inputLine = bufferedReader.readLine()) != null) {
                result += inputLine;
            }
            bufferedReader.close();
            String[] resp_data = result.split(",");
            int count = 0;
            for (int i = 0; i < resp_data.length; i++) {
                String[] split_data = resp_data[i].split("=");
                if (split_data[0].trim().equals("age") && Integer.parseInt(split_data[1]) >= 50) {
                    count++;
                }
            }
            System.out.println(count);
        } catch (Exception e) {
            e.printStackTrace();