using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http.Extensions;

namespace Cep.Api.Controllers;


[Route("api/logged-user")]
public class LoggedUserController : ControllerBase
{
[HttpGet("login")]
public IActionResult Login(string? uri = null)
{
    uri ??= "http://localhost:4200";

    Response.Cookies.Append(
        "return_uri",
        uri
    );

    var callback = Uri.EscapeDataString(
        "http://localhost:5197/api/logged-user/redirect"
    );

    var keycloakUrl =
        "https://auth.headsoft.com.br/realms/headsoft/protocol/openid-connect/auth" +
        "?client_id=headsoft-web" +
        "&response_type=code" +
        "&scope=openid" +
        $"&redirect_uri={callback}";

    return Redirect(keycloakUrl);
}

[AllowAnonymous]
[HttpGet("redirect")]
public IActionResult RedirectFromKeycloak(
    string code,
    string session_state
)
{
    Console.WriteLine($"CODE: {code}");

    var returnUri =
        Request.Cookies["return_uri"]
        ?? "http://localhost:4200";

    return Redirect(returnUri);
}



}
