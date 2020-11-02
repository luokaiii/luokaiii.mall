package cn.luokaiii.mall.web.controller.auth;

import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/oauth2")
public class OAuth2Controller {

    private final String clientId;
    private final String clientSecrets;

    // TODO 这个为私有会报错？
    RestTemplate restTemplate;

    @Autowired
    public OAuth2Controller(RestTemplate restTemplate,
                            @Value("${oauth2.github.client_id}") String clientId,
                            @Value("${oauth2.github.client_secrets}") String clientSecret) {
        this.restTemplate = restTemplate;
        this.clientId = clientId;
        this.clientSecrets = clientSecret;
    }

    @GetMapping("/{platform}/render")
    public String getOpenIDRender(@PathVariable String platform) {
        return "https://github.com/login/oauth/authorize?client_id=2c340857962107a8cc77&redirect_uri=http://localhost:8000/api/oauth2/github/callback";
    }

    @RequestMapping("/{platform}/callback")
    public Object getUserInfoByCallbackCode(@PathVariable String platform,
                                            AuthCallback callback) throws URISyntaxException {
        if (callback.getError() == null && callback.getCode() != null) {
            // 获取 access_token
            String accessTokenUrl = "https://github.com/login/oauth/access_token?client_id={clientID}&client_secret={clientSecret}&code={token}";
            Map<String, String> uriVariables = new HashMap<>();
            uriVariables.put("clientID", clientId);
            uriVariables.put("clientSecret", clientSecrets);
            uriVariables.put("token", callback.getCode());

            ResponseEntity<AuthToken> post = restTemplate.postForEntity(accessTokenUrl, null, AuthToken.class, uriVariables);
            AuthToken authToken = post.getBody();
            String accessToken = authToken.getAccess_token();

            // 通过 access_token 获取 user_info
            String userInfoUrl = "https://api.github.com/user";
            HttpHeaders headers = new HttpHeaders();
            headers.add(HttpHeaders.ACCEPT, "application/json");
            headers.add(HttpHeaders.AUTHORIZATION, "token " + accessToken);
            HttpEntity<Object> httpEntity = new HttpEntity<>(headers);

            ResponseEntity<AuthUserInfo> exchange = restTemplate.exchange(userInfoUrl, HttpMethod.GET, httpEntity, AuthUserInfo.class, new HashMap<>());
            return exchange.getBody();
        }
        return null;
    }

    @Getter
    @Setter
    public static class AuthCallback {
        private String code;
        private String error;
    }

    @Getter
    @Setter
    public static class AuthToken {
        private String access_token;
        private String token_type;
        private String scope;
    }

    @Getter
    @Setter
    public static class AuthUserInfo {
        private Long id;
        private String login;
        private String avatar_url;
        private String url;
    }
}
