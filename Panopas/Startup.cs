using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Panopas.Startup))]
namespace Panopas
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
